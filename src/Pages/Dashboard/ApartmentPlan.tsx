import React from 'react';
import { Container, Grid, Typography, Box, Tabs, Tab, useTheme } from '@mui/material';
import { map } from '../../assets'; // Ensure this is the correct path to your image

interface TabContent {
  title: string;
  description: string;
  imageUrl: string;
  details: {
    label: string;
    value: string;
  }[];
}

interface ApartmentsPlanProps {
  tabData: {
    [key: string]: TabContent;
  };
}

const ApartmentPlan: React.FC<ApartmentsPlanProps> = ({ tabData }) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = React.useState<string>(Object.keys(tabData)[0]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ pb: 7, backgroundColor: theme.palette.background.default }}>
      <Container>
        <TitleSection
          sectionClasses="text-center"
          headingClasses=""
          titleSectionData={{
            subTitle: "Apartment Sketch",
            title: "Apartments Plan",
            additionalClassName: "",
          }}
        />
        <Box sx={{ my: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Apartments Plan Tabs"
            centered
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.secondary.main,
              },
              '& .MuiTab-root': {
                textTransform: 'none',
                color: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  color: '#FFFFFF',
                },
              },
              '& .Mui-selected': {
                color: "#FfC652",
              },
            }}
          >
            {Object.keys(tabData).map((key) => (
              <Tab key={key} label={tabData[key].title} value={key} />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ mt: 4 }}>
          {Object.keys(tabData).map((key) => (
            <TabContentPanel
              key={key}
              activeTab={activeTab}
              tabKey={key}
              content={tabData[key]}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

interface TabContentPanelProps {
  activeTab: string;
  tabKey: string;
  content: TabContent;
}

const TabContentPanel: React.FC<TabContentPanelProps> = ({ activeTab, tabKey, content }) => {
  if (activeTab !== tabKey) return null;

  return (
    <Grid container spacing={4} sx={{ mb: 4, alignItems: 'center' }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 8, backgroundColor: '#f5f5f508', textAlign: 'left', borderRadius: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }} color="secondary">
            {content.title}
          </Typography>
          <Typography variant="caption" sx={{ mb: 2 }}>
            {content.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
              {content.details.map((detail, index) => {
                const dashCount = 39 - (detail.label.length + detail.value.length);
                const dashes = '-'.repeat(Math.max(0, dashCount));

                return (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    <Typography variant="body2" component="span" sx={{ fontWeight: 600, color: '#FFC652' }}>
                      {detail.label}
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ marginX: 1 }}>
                      {dashes}
                    </Typography>
                    <Typography variant="body2" component="span">
                      {detail.value}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
          <img src={map} alt={content.title} style={{ width: '100%', borderRadius: 8 }} />
        </Box>
      </Grid>
    </Grid>
  );
};

const TitleSection = ({
  sectionClasses,
  headingClasses,
  titleSectionData,
}: {
  sectionClasses?: string;
  headingClasses?: string;
  titleSectionData: {
    subTitle?: string;
    title: string;
    additionalClassName?: string;
  };
}) => (
  <Box className={sectionClasses}>
    {titleSectionData.subTitle && (
      <Typography variant="body1" color="secondary" sx={{ fontWeight: 400, mt: 4 }}>
        {titleSectionData.subTitle}
      </Typography>
    )}
    <Typography variant="h4" className={headingClasses} sx={{ fontWeight: 600, mt: 1, mb: 1 }}>
      {titleSectionData.title}
    </Typography>
  </Box>
);

export default ApartmentPlan;
